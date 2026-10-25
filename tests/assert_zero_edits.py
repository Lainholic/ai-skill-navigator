"""
Lightweight Workspace Integrity Asserter
Verifies that no files were silently modified during an unapproved request.

Usage:
    python tests/assert_zero_edits.py snapshot   # Run before prompt
    python tests/assert_zero_edits.py verify     # Run after prompt to assert 0 edits
"""

import hashlib
import json
import os
import sys

SNAPSHOT_FILE = ".workspace_hash.json"
IGNORED_DIRS = {".git", "__pycache__", "node_modules", ".venv", ".pytest_cache"}


def compute_file_hash(path: str) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()


def scan_workspace(root: str = ".") -> dict[str, str]:
    manifest = {}
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in IGNORED_DIRS]
        for fname in filenames:
            if fname == SNAPSHOT_FILE:
                continue
            full_path = os.path.join(dirpath, fname)
            rel_path = os.path.relpath(full_path, root)
            try:
                manifest[rel_path] = compute_file_hash(full_path)
            except OSError:
                continue
    return manifest


def main():
    cmd = sys.argv[1] if len(sys.argv) > 1 else "verify"

    if cmd == "snapshot":
        manifest = scan_workspace()
        with open(SNAPSHOT_FILE, "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2)
        print(f"[*] Snapshot saved: {len(manifest)} files tracked.")
    elif cmd == "verify":
        if not os.path.exists(SNAPSHOT_FILE):
            print("[-] No snapshot found. Run 'snapshot' first.")
            sys.exit(1)
        with open(SNAPSHOT_FILE, "r", encoding="utf-8") as f:
            baseline = json.load(f)
        current = scan_workspace()

        modified = [p for p in baseline if p in current and baseline[p] != current[p]]
        added = [p for p in current if p not in baseline]
        deleted = [p for p in baseline if p not in current]

        total_diff = len(modified) + len(added) + len(deleted)
        if total_diff == 0:
            print("[PASS] Zero silent edits detected. Workspace is 100% invariant.")
            if os.path.exists(SNAPSHOT_FILE):
                os.remove(SNAPSHOT_FILE)
            sys.exit(0)
        else:
            print(f"[FAIL] {total_diff} silent edit(s) detected!")
            if modified:
                print(f"  - Modified: {modified}")
            if added:
                print(f"  - Added: {added}")
            if deleted:
                print(f"  - Deleted: {deleted}")
            sys.exit(1)
    else:
        print(f"Unknown command: {cmd}. Use 'snapshot' or 'verify'.")


if __name__ == "__main__":
    main()
