# Visio Sonics Design System

This directory contains the design language for the Visio Sonics Platform.

## Principles

- Design tokens are the single source of truth.
- Components consume tokens.
- Pages consume components.
- Pages must never define their own design language.

## Architecture

design/
└── tokens/

## Rules

1. Never hard-code spacing where a spacing token exists.
2. Never hard-code typography where typography tokens exist.
3. Never duplicate container widths.
4. Extend tokens before introducing exceptions.