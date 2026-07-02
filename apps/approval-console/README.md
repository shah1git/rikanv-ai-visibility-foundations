# RikaNV AI Console

## Purpose

RikaNV AI Console is the frontend and human control plane for the agent-first system.

It gives humans a structured place to approve decisions, review risks and control publication gates.

GitHub remains the artifact store, audit trail and source of truth for agent outputs.
The Console reads prepared artifacts and turns them into a decision workflow.

## What It Is

- decision queue;
- material preview;
- risk dashboard;
- approval interface;
- export/import layer for human decisions.

## What It Is Not

- not GitHub UI;
- not a CMS;
- not a chat;
- not an agent runtime;
- not a publishing system;
- not a replacement for source/evidence artifacts.

## Core Principle

Humans should not read all Markdown files.
Humans should make structured decisions.

The Console should present only:

- what changed;
- what is risky;
- what decision is required;
- what happens if a decision is approved or rejected;
- which publication gates remain closed.

## MVP Boundary

This folder contains design, wireframes, data contracts and sample data only.

Do not add runtime code, dependencies, a framework or `package.json` in this MVP design step.
