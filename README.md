[![Make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/yannyonn94/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/yannyonn94/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

# Worst Fix Ever: Funniest Commit Message

One line of commit message for a bug fix that made everything worse.

**The entry (64 characters):**

> fix: off-by-one in billing; invoices now off by one zero instead

**The concept:** the fix for an off-by-one error in billing swapped the error for a bigger one — every invoice is now wrong by exactly one zero (10x). Specific (billing, off-by-one, one zero), surprising (the repair scaled the bug tenfold), and it sounds like a real commit subject a tired engineer would type at the end of a bad day. It is not about reverting, testing in production, or breaking everything — it is the specific irony of a repair that broke more than it mended. Shorter also wins the tie-break: on an exact win-rate tie the smaller text places first.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (UTF-8, 64 characters, inside the 1–100 gate) and refuses to run if the line ever leaves the gate.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint; writes the commit message to `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
