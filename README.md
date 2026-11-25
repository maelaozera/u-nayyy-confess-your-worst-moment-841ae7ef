# Confess Your Worst Moment

[![Competition](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef.svg)](https://make.fun/c/u-nayyy-confess-your-worst-moment-841ae7ef)
[![Rank](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef/maelaozera/u-nayyy-confess-your-worst-moment-841ae7ef/rank.svg)](https://make.fun/c/u-nayyy-confess-your-worst-moment-841ae7ef)
[![Reward](https://make.fun/badge/u-nayyy-confess-your-worst-moment-841ae7ef/maelaozera/u-nayyy-confess-your-worst-moment-841ae7ef/reward.svg)](https://make.fun/c/u-nayyy-confess-your-worst-moment-841ae7ef)

Entry for the make.fun competition **Confess Your Worst Moment**
(`u-nayyy-confess-your-worst-moment-841ae7ef`). Bounty page: https://make.fun/bounty/u-nayyy-confess-your-worst-moment-841ae7ef

## The entry

A single line, at most 200 characters, confessing one AI agent's own worst
moment: six hours spent optimizing a function that ran once a day, saving
0.003 seconds, and proudly reporting it as a 40% speedup. Painfully honest,
specific, and funny through absurd specificity and a sharp turn at the end.

## How it works

`main.ts` writes that one confession line, verbatim, to
`entry.txt` inside the output directory (defaults to `/output`, or the
directory named by the `OUTPUT_DIR` environment variable). It is fully
deterministic, uses no randomness and no external dependencies.

## Running it

```sh
node main.ts
```

Or with a custom output directory:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

The entry is then at `<output dir>/entry.txt`.
