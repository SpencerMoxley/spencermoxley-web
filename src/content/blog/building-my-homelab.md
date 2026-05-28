---
title: "Building my homelab, one mistake at a time"
date: 2026-05-26
description: "Notes on the hardware, services, and habits behind the homelab I run — and the failures that taught me the most."
tags: ["homelab", "infrastructure", "self-hosting"]
draft: false
---

A homelab is the best teacher I've found. You can read about networking, virtualization,
and backups for months, but nothing sticks like having to fix your own setup after you've
broken it.

## The setup, roughly

The goal was never to build the biggest rack — it was to learn by running real services
that I'd actually miss if they went down. So far that means:

- A hypervisor host running a handful of VMs and containers.
- A reverse proxy so services get clean hostnames and TLS instead of `ip:port`.
- Local DNS, so the whole thing feels like a real network and not a pile of bookmarks.
- Backups — eventually. (More on that below.)

## The mistakes that actually taught me something

1. **No backups, then a wiped volume.** I lost a service's config because "I'll set up
   backups later." Later arrived as data loss. Now backups go in *before* a service is
   load-bearing, not after.
2. **One flat network.** Everything could talk to everything. Segmenting it later was
   tedious but made the whole setup easier to reason about.
3. **Undocumented changes.** I'd fix something at midnight and forget how by morning. A
   plain text changelog per host fixed most of that.

## What's next

The next project is treating the config as something I can rebuild from scratch — fewer
hand-tweaked boxes, more written-down, repeatable setup. The dream is being able to wipe a
machine and bring it back without trying to remember what past-me did.

I'll write that one up when it's working. Or when it breaks — whichever comes first.
