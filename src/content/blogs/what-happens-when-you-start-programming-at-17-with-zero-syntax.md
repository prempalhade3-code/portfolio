---
title: "What Happens When You Start Programming at 17 With Zero Syntax?"
date: March 12th, 2026
---

In my first year of diploma at BVJNIOT, my computer teacher handed out a worksheet with ten lines of Python and said, "Type exactly what you see." I typed exactly what I saw. The program crashed. I raised my hand and asked what a semicolon was. She said, "We are not using Java." I said, "Then why does my screen look angry?"

That was my first week programming from scratch at 17. No prior syntax; no older cousin with a GitHub; just me, a lab PC, and a print statement that refused to cooperate.

So, I present my analysis on the topic at multiple different levels of depth.

# Level One: The First Failure

At first glance, the problem seems simple. Programming is "just logic." If you can solve a math word problem, you can code.

My first file was supposed to be:

```
print("Hello World")
```

Somehow I had typed smart quotes instead of straight quotes. Python responded with:

```
SyntaxError: invalid character in identifier
```

I stared at the error like it was accusing me personally. My friend Rohan, who had been coding since 14, leaned over and replaced one character. The program ran. His explanation: **"You imported drama via punctuation."**

Conclusion at Level One: **starting at 17 is fine; starting with perfect syntax is not required.**

# Level Two: The Learning Curve in Actual Days

I tracked my first month in a notebook [embarrassing, but accurate]:

| Week | What I thought I learned | What actually worked |
| --- | --- | --- |
| 1 | variables | remembering semicolons are not the enemy in other languages |
| 2 | loops | stopping infinite loops before the lab teacher noticed |
| 3 | functions | naming things better than `temp2_final_REAL` |
| 4 | arrays | accepting that off-by-one errors are a personality trait |

One 2019 study on late-start novice programmers [[1]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6322776/) notes that older beginners often catch up quickly once they stop treating errors as moral failures. That matched my experience exactly: I did not become fast; I became **less offended by red text**.

![Equivalent to my first working program](/blogs/cartoon-laptop.svg)

By week six, I had written a clunky attendance tracker for our class. It had 42 lines, three bugs, and one button that only worked if you clicked it "with confidence." I demoed it anyway. The teacher called it "ambitious." Rohan called it "a crime against UI." I called it progress.

# Level Three: Why "From Scratch" Matters

Here is the part I did not understand at 17: starting from zero forces you to learn **mechanics before mythology**.

Experienced students already had mental models for:

- compile → run
- error → search
- fix → rerun

I had to build those models while also learning what a string was. Slow at first; durable later.

When I moved from diploma to CSE at VIT, the first labs felt oddly familiar. Not easy; familiar. Like recognizing the shape of a problem even when the language changed.

My current rule before hackathons:

1. make it run
2. make it not embarrassing
3. make it defensible in front of judges
4. sleep if possible

That list started in the diploma lab, not in a startup office.

# Level Four: Was 17 Too Late?

_At this point I have already answered the practical question and am extending the argument until it barely resembles the original worksheet, but I think it is still interesting._

If "late" means winning IOI at 16, then yes, I was late.

If "late" means building things people use, then 17 was early enough. My first useful program was ugly. My current work is still sometimes ugly before it stabilizes. The difference is I now expect the ugly phase instead of interpreting it as proof that I should quit.

Rohan still ships faster. I ship more patiently. Both are valid; only one of us spent a week fighting curly quotes.

**Final verdict:** starting programming at 17 with zero syntax did not make me a prodigy. It made me someone who reads errors instead of fearing them.

Take that, angry print statement.
