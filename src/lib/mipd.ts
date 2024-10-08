import type { EIP6963ProviderDetail } from 'mipd'
import { createStore } from 'mipd'

export const mipdStore = createStore()

export const METAMASK_RDNS = 'io.metamask'

// Static MIPD providers - we *always* want to display these
// Note these are partial and missing provider, so you *can* see them even if uninstalled, but will be overriden with detected ones if installed
export const staticMipdProviders = [
  {
    supportsMobileBrowser: true,
    provider: undefined,
    info: {
      uuid: '3fae44d7-3daa-479c-b5bf-c54a55aede67',
      name: 'MetaMask',
      icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMzIiB2aWV3Qm94PSIwIDAgMzUgMzMiIHdpZHRoPSIzNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjI1Ij48cGF0aCBkPSJtMzIuOTU4MiAxLTEzLjEzNDEgOS43MTgzIDIuNDQyNC01LjcyNzMxeiIgZmlsbD0iI2UxNzcyNiIgc3Ryb2tlPSIjZTE3NzI2Ii8+PGcgZmlsbD0iI2UyNzYyNSIgc3Ryb2tlPSIjZTI3NjI1Ij48cGF0aCBkPSJtMi42NjI5NiAxIDEzLjAxNzE0IDkuODA5LTIuMzI1NC01LjgxODAyeiIvPjxwYXRoIGQ9Im0yOC4yMjk1IDIzLjUzMzUtMy40OTQ3IDUuMzM4NiA3LjQ4MjkgMi4wNjAzIDIuMTQzNi03LjI4MjN6Ii8+PHBhdGggZD0ibTEuMjcyODEgMjMuNjUwMSAyLjEzMDU1IDcuMjgyMyA3LjQ2OTk0LTIuMDYwMy0zLjQ4MTY2LTUuMzM4NnoiLz48cGF0aCBkPSJtMTAuNDcwNiAxNC41MTQ5LTIuMDc4NiAzLjEzNTggNy40MDUuMzM2OS0uMjQ2OS03Ljk2OXoiLz48cGF0aCBkPSJtMjUuMTUwNSAxNC41MTQ5LTUuMTU3NS00LjU4NzA0LS4xNjg4IDguMDU5NzQgNy40MDQ5LS4zMzY5eiIvPjxwYXRoIGQ9Im0xMC44NzMzIDI4Ljg3MjEgNC40ODE5LTIuMTYzOS0zLjg1ODMtMy4wMDYyeiIvPjxwYXRoIGQ9Im0yMC4yNjU5IDI2LjcwODIgNC40Njg5IDIuMTYzOS0uNjEwNS01LjE3MDF6Ii8+PC9nPjxwYXRoIGQ9Im0yNC43MzQ4IDI4Ljg3MjEtNC40NjktMi4xNjM5LjM2MzggMi45MDI1LS4wMzkgMS4yMzF6IiBmaWxsPSIjZDViZmIyIiBzdHJva2U9IiNkNWJmYjIiLz48cGF0aCBkPSJtMTAuODczMiAyOC44NzIxIDQuMTU3MiAxLjk2OTYtLjAyNi0xLjIzMS4zNTA4LTIuOTAyNXoiIGZpbGw9IiNkNWJmYjIiIHN0cm9rZT0iI2Q1YmZiMiIvPjxwYXRoIGQ9Im0xNS4xMDg0IDIxLjc4NDItMy43MTU1LTEuMDg4NCAyLjYyNDMtMS4yMDUxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTIwLjUxMjYgMjEuNzg0MiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciLz48cGF0aCBkPSJtMTAuODczMyAyOC44NzIxLjY0OTUtNS4zMzg2LTQuMTMxMTcuMTE2N3oiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNC4wOTgyIDIzLjUzMzUuNjM2NiA1LjMzODYgMy40OTQ2LTUuMjIxOXoiIGZpbGw9IiNjYzYyMjgiIHN0cm9rZT0iI2NjNjIyOCIvPjxwYXRoIGQ9Im0yNy4yMjkxIDE3LjY1MDctNy40MDUuMzM2OS42ODg1IDMuNzk2NiAxLjA5MTMtMi4yOTM1IDIuNjM3MiAxLjIwNTF6IiBmaWxsPSIjY2M2MjI4IiBzdHJva2U9IiNjYzYyMjgiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4IDIuNjI0Mi0xLjIwNTEgMS4wOTEzIDIuMjkzNS42ODg1LTMuNzk2Ni03LjQwNDk1LS4zMzY5eiIgZmlsbD0iI2NjNjIyOCIgc3Ryb2tlPSIjY2M2MjI4Ii8+PHBhdGggZD0ibTguMzkyIDE3LjY1MDcgMy4xMDQ5IDYuMDUxMy0uMTAzOS0zLjAwNjJ6IiBmaWxsPSIjZTI3NTI1IiBzdHJva2U9IiNlMjc1MjUiLz48cGF0aCBkPSJtMjQuMjQxMiAyMC42OTU4LS4xMTY5IDMuMDA2MiAzLjEwNDktNi4wNTEzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTE1Ljc5NyAxNy45ODc2LS42ODg2IDMuNzk2Ny44NzA0IDQuNDgzMy4xOTQ5LTUuOTA4N3oiIGZpbGw9IiNlMjc1MjUiIHN0cm9rZT0iI2UyNzUyNSIvPjxwYXRoIGQ9Im0xOS44MjQyIDE3Ljk4NzYtLjM2MzggMi4zNTg0LjE4MTkgNS45MjE2Ljg3MDQtNC40ODMzeiIgZmlsbD0iI2UyNzUyNSIgc3Ryb2tlPSIjZTI3NTI1Ii8+PHBhdGggZD0ibTIwLjUxMjcgMjEuNzg0Mi0uODcwNCA0LjQ4MzQuNjIzNi40NDA2IDMuODU4NC0zLjAwNjIuMTE2OS0zLjAwNjJ6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48cGF0aCBkPSJtMTEuMzkyOSAyMC42OTU4LjEwNCAzLjAwNjIgMy44NTgzIDMuMDA2Mi42MjM2LS40NDA2LS44NzA0LTQuNDgzNHoiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0yMC41OTA2IDMwLjg0MTcuMDM5LTEuMjMxLS4zMzc4LS4yODUxaC00Ljk2MjZsLS4zMjQ4LjI4NTEuMDI2IDEuMjMxLTQuMTU3Mi0xLjk2OTYgMS40NTUxIDEuMTkyMSAyLjk0ODkgMi4wMzQ0aDUuMDUzNmwyLjk2Mi0yLjAzNDQgMS40NDItMS4xOTIxeiIgZmlsbD0iI2MwYWM5ZCIgc3Ryb2tlPSIjYzBhYzlkIi8+PHBhdGggZD0ibTIwLjI2NTkgMjYuNzA4Mi0uNjIzNi0uNDQwNmgtMy42NjM1bC0uNjIzNi40NDA2LS4zNTA4IDIuOTAyNS4zMjQ4LS4yODUxaDQuOTYyNmwuMzM3OC4yODUxeiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2Ii8+PHBhdGggZD0ibTMzLjUxNjggMTEuMzUzMiAxLjEwNDMtNS4zNjQ0Ny0xLjY2MjktNC45ODg3My0xMi42OTIzIDkuMzk0NCA0Ljg4NDYgNC4xMjA1IDYuODk4MyAyLjAwODUgMS41Mi0xLjc3NTItLjY2MjYtLjQ3OTUgMS4wNTIzLS45NTg4LS44MDU0LS42MjIgMS4wNTIzLS44MDM0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTEgNS45ODg3MyAxLjExNzI0IDUuMzY0NDctLjcxNDUxLjUzMTMgMS4wNjUyNy44MDM0LS44MDU0NS42MjIgMS4wNTIyOC45NTg4LS42NjI1NS40Nzk1IDEuNTE5OTcgMS43NzUyIDYuODk4MzUtMi4wMDg1IDQuODg0Ni00LjEyMDUtMTIuNjkyMzMtOS4zOTQ0eiIgZmlsbD0iIzc2M2UxYSIgc3Ryb2tlPSIjNzYzZTFhIi8+PHBhdGggZD0ibTMyLjA0ODkgMTYuNTIzNC02Ljg5ODMtMi4wMDg1IDIuMDc4NiAzLjEzNTgtMy4xMDQ5IDYuMDUxMyA0LjEwNTItLjA1MTloNi4xMzE4eiIgZmlsbD0iI2Y1ODQxZiIgc3Ryb2tlPSIjZjU4NDFmIi8+PHBhdGggZD0ibTEwLjQ3MDUgMTQuNTE0OS02Ljg5ODI4IDIuMDA4NS0yLjI5OTQ0IDcuMTI2N2g2LjExODgzbDQuMTA1MTkuMDUxOS0zLjEwNDg3LTYuMDUxM3oiIGZpbGw9IiNmNTg0MWYiIHN0cm9rZT0iI2Y1ODQxZiIvPjxwYXRoIGQ9Im0xOS44MjQxIDE3Ljk4NzYuNDQxNy03LjU5MzIgMi4wMDA3LTUuNDAzNGgtOC45MTE5bDIuMDAwNiA1LjQwMzQuNDQxNyA3LjU5MzIuMTY4OSAyLjM4NDIuMDEzIDUuODk1OGgzLjY2MzVsLjAxMy01Ljg5NTh6IiBmaWxsPSIjZjU4NDFmIiBzdHJva2U9IiNmNTg0MWYiLz48L2c+PC9zdmc+',
      rdns: 'io.metamask',
    },
  },
  {
    supportsMobileBrowser: false,
    provider: undefined,
    info: {
      uuid: 'c8872be5-85b6-4b79-8681-92150176d96e',
      name: 'Coinbase Wallet',
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI4IDU2YzE1LjQ2NCAwIDI4LTEyLjUzNiAyOC0yOFM0My40NjQgMCAyOCAwIDAgMTIuNTM2IDAgMjhzMTIuNTM2IDI4IDI4IDI4WiIgZmlsbD0iIzFCNTNFNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyOGMwIDExLjU5OCA5LjQwMiAyMSAyMSAyMXMyMS05LjQwMiAyMS0yMVMzOS41OTggNyAyOCA3IDcgMTYuNDAyIDcgMjhabTE3LjIzNC02Ljc2NmEzIDMgMCAwIDAtMyAzdjcuNTMzYTMgMyAwIDAgMCAzIDNoNy41MzNhMyAzIDAgMCAwIDMtM3YtNy41MzNhMyAzIDAgMCAwLTMtM2gtNy41MzNaIiBmaWxsPSIjZmZmIi8+PC9zdmc+',
      rdns: 'com.coinbase.wallet',
    },
  },
  {
    supportsMobileBrowser: false,
    provider: undefined,
    info: {
      uuid: 'cc12b1b5-58a7-4df4-b12d-dd01fca161ce',
      name: 'Rabby Wallet',
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc0MV8yNzUxKSI+CjxtYXNrIGlkPSJtYXNrMF83NDFfMjc1MSIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CjxwYXRoIGQ9Ik0zMiAxNkMzMiA3LjE2MzQ0IDI0LjgzNjYgMCAxNiAwQzcuMTYzNDQgMCAwIDcuMTYzNDQgMCAxNkMwIDI0LjgzNjYgNy4xNjM0NCAzMiAxNiAzMkMyNC44MzY2IDMyIDMyIDI0LjgzNjYgMzIgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNzQxXzI3NTEpIj4KPHBhdGggZD0iTTMyIDE2QzMyIDcuMTYzNDQgMjQuODM2NiAwIDE2IDBDNy4xNjM0NCAwIDAgNy4xNjM0NCAwIDE2QzAgMjQuODM2NiA3LjE2MzQ0IDMyIDE2IDMyQzI0LjgzNjYgMzIgMzIgMjQuODM2NiAzMiAxNloiIGZpbGw9IiM3MDg0RkYiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF83NDFfMjc1MSkiPgo8cGF0aCBkPSJNMjcuNjAxOSAxNy4zODc2QzI4LjUyMTYgMTUuMzI2MSAyMy45NzQ4IDkuNTY2MzIgMTkuNjMxIDcuMTY2NzZDMTYuODkyOSA1LjMwNzc5IDE0LjAzOTkgNS41NjMxOCAxMy40NjIgNi4zNzkzOEMxMi4xOTQgOC4xNzA2OSAxNy42NjExIDkuNjg4NTEgMjEuMzE3NCAxMS40NTk3QzIwLjUzMTQgMTEuODAyMiAxOS43OTA4IDEyLjQxNjkgMTkuMzU1MiAxMy4yMDI5QzE3Ljk5MjEgMTEuNzA5OCAxNS4wMDAzIDEwLjQyMzkgMTEuNDg5NyAxMS40NTk3QzkuMTIzOTcgMTIuMTU3NyA3LjE1NzkxIDEzLjgwMzIgNi4zOTgwNCAxNi4yODg1QzYuMjEzMzcgMTYuMjA2MiA2LjAwODk0IDE2LjE2MDQgNS43OTM4NyAxNi4xNjA0QzQuOTcxNDIgMTYuMTYwNCA0LjMwNDY5IDE2LjgyOTQgNC4zMDQ2OSAxNy42NTQ2QzQuMzA0NjkgMTguNDc5OSA0Ljk3MTQyIDE5LjE0ODggNS43OTM4NyAxOS4xNDg4QzUuOTQ2MzIgMTkuMTQ4OCA2LjQyMjk4IDE5LjA0NjMgNi40MjI5OCAxOS4wNDYzTDE0LjAzOTkgMTkuMTAxNkMxMC45OTM3IDIzLjk1MDQgOC41ODYzNSAyNC42NTkxIDguNTg2MzUgMjUuNDk5MkM4LjU4NjM1IDI2LjMzOTIgMTAuODg5OCAyNi4xMTE2IDExLjc1NDcgMjUuNzk4NEMxNS44OTQ5IDI0LjI5OTUgMjAuMzQxNyAxOS42MjggMjEuMTA0OCAxOC4yODMzQzI0LjMwOTIgMTguNjg0NCAyNy4wMDIyIDE4LjczMTggMjcuNjAxOSAxNy4zODc2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzc0MV8yNzUxKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjMwMjkgMTEuNDUzOEMyMS4zMDY3IDExLjQ1NTUgMjEuMzEwNiAxMS40NTcxIDIxLjMxNDQgMTEuNDU4OEMyMS40ODM5IDExLjM5MTggMjEuNDU2NSAxMS4xNDA3IDIxLjQwOTkgMTAuOTQzNUMyMS4zMDMgMTAuNDkwMSAxOS40NTc1IDguNjYxNjUgMTcuNzI0NSA3Ljg0MjY1QzE1LjM2MjkgNi43MjY2NSAxMy42MjQgNi43ODQyMSAxMy4zNjcyIDcuMjk4NjVDMTMuODQ3MiA4LjI4ODIxIDE2LjA3NzkgOS4yMTcyNyAxOC40MDc3IDEwLjE4NzZDMTkuMzk3MSAxMC41OTk2IDIwLjQwNDMgMTEuMDE5MSAyMS4zMDI5IDExLjQ1MzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfNzQxXzI3NTEpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTguMzIyOCAyMS40MTY3QzE3Ljg0NTMgMjEuMjMzNyAxNy4zMDYgMjEuMDY1OCAxNi42OTI5IDIwLjkxMzNDMTcuMzQ2OSAxOS43MzkzIDE3LjQ4NDEgMTguMDAxMSAxNi44NjY1IDE2LjkwMjJDMTUuOTk5OCAxNS4zNTk5IDE0LjkxMTcgMTQuNTM5MSAxMi4zODM0IDE0LjUzOTFDMTAuOTkyOCAxNC41MzkxIDcuMjQ4NzcgMTUuMDA5IDcuMTgyMjcgMTguMTQ1QzcuMTc1MzQgMTguNDczOCA3LjE4MjA5IDE4Ljc3NTEgNy4yMDU3NyAxOS4wNTIxTDE0LjA0MyAxOS4xMDE5QzEzLjEyMSAyMC41Njk0IDEyLjI1NzUgMjEuNjU3NyAxMS41MDE2IDIyLjQ4NTJDMTIuNDA5MiAyMi43MTg2IDEzLjE1ODEgMjIuOTE0NCAxMy44NDU3IDIzLjA5NDNDMTQuNDk3OCAyMy4yNjQ4IDE1LjA5NDYgMjMuNDIwOSAxNS43MTkzIDIzLjU4MDlDMTYuNjYyIDIyLjg5MTggMTcuNTQ4MyAyMi4xNDA0IDE4LjMyMjggMjEuNDE2N1oiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl83NDFfMjc1MSkiLz4KPHBhdGggZD0iTTYuMzA4NzQgMTguNzI4M0M2LjU4ODA1IDIxLjExMDUgNy45MzczNiAyMi4wNDQxIDEwLjY5NDYgMjIuMzIwNUMxMy40NTE5IDIyLjU5NjggMTUuMDMzNSAyMi40MTE0IDE3LjEzOTEgMjIuNjAzNkMxOC44OTc3IDIyLjc2NDEgMjAuNDY4IDIzLjY2MzMgMjEuMDUwNSAyMy4zNTI2QzIxLjU3NDcgMjMuMDczIDIxLjI4MTQgMjIuMDYyNiAyMC41Nzk5IDIxLjQxNDRDMTkuNjcwNiAyMC41NzQxIDE4LjQxMjEgMTkuOTkgMTYuMTk3NyAxOS43ODI2QzE2LjYzOSAxOC41NzAyIDE2LjUxNTQgMTYuODcwMyAxNS44Mjk5IDE1Ljk0NTVDMTQuODM4OSAxNC42MDgyIDEzLjAwOTcgMTQuMDAzNiAxMC42OTQ2IDE0LjI2NzhDOC4yNzU4NiAxNC41NDM4IDUuOTU4MjEgMTUuNzM4NiA2LjMwODc0IDE4LjcyODNaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNzQxXzI3NTEpIi8+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNzQxXzI3NTEiIHg9Ii03Ny42MTUzIiB5PSItNzYuMTYwMiIgd2lkdGg9IjE4Ny4yNTQiIGhlaWdodD0iMTg0LjE2MiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNDAuOTYiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMTUxOTMzIDAgMCAwIDAgMC4yMzkyMzggMCAwIDAgMCAwLjQ5MDI0MSAwIDAgMCAwLjU0IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQxXzI3NTEiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzQxXzI3NTEiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl83NDFfMjc1MSIgeDE9IjExLjIxNDIiIHkxPSIxNS41NjIiIHgyPSIyNy40MTE5IiB5Mj0iMjAuMTM5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl83NDFfMjc1MSIgeDE9IjI0LjY3NDUiIHkxPSIxNS4yNTE4IiB4Mj0iMTIuOTUzNiIgeTI9IjMuNTQxNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg2OTdGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4Njk3RkYiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNzQxXzI3NTEiIHgxPSIxOC42NDc4IiB5MT0iMjEuODI2MSIgeDI9IjcuNDA4MDIiIHkyPSIxNS4zODU5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4Njk3RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODY5N0ZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzc0MV8yNzUxIiB4MT0iMTIuMTgyNyIgeTE9IjE1LjQzOTQiIHgyPSIxOS43OTkxIiB5Mj0iMjUuMDg0MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjAuOTgzODk1IiBzdG9wLWNvbG9yPSIjRDFEOEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNzQxXzI3NTEiPgo8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
      rdns: 'io.rabby',
    },
  },
  {
    supportsMobileBrowser: false,
    provider: undefined,
    info: {
      uuid: 'f932d0ca-0e8b-405d-aa9a-2d9dcddff53d',
      name: 'XDEFI',
      icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMTkxXzQyOTApIj4KPHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHJ4PSIxMDQiIGZpbGw9IiMzMzVERTUiLz4KPHBhdGggZD0iTTQ2My40MzggMjQxLjI0N0M0NjAuNzY1IDIwNS4xMzUgNDQ4LjU4IDE3MC4zMzggNDI4LjA4NyAxNDAuMjcxQzQwNy41OTkgMTEwLjIwOSAzNzkuNTA5IDg1LjkxODIgMzQ2LjU3OSA2OS43OTZDMzEzLjY1MyA1My42NzggMjc3LjAzMiA0Ni4yODA0IDI0MC4zMiA0OC4zMzYzQzIwMy42MDUgNTAuMzkyMSAxNjguMDY5IDYxLjgyNTUgMTM3LjIxMiA4MS41MjAxQzEwNi4zNTQgMTAxLjIxIDgxLjIzOTQgMTI4LjQ4IDY0LjMzODYgMTYwLjYzNkw2My41MzYgMTYyLjI1N0M1OC4xOTcxIDE3My4xMjYgNTQuNTg3OCAxODQuNzQ1IDUyLjg0MTEgMTk2LjY5N0M0Ny44NDU1IDIzMi4wMjEgNTUuNTkyIDI2My40NiA3NS44Mjc1IDI4Ny42NjdDOTcuOTU5OSAzMTQuMTM2IDEzMy45OTMgMzI5Ljg3OSAxNzcuMjE1IDMzMS45NDdDMjI5LjgzMiAzMzQuNTU1IDI4Mi4xNDggMzIwLjQzNCAzMTkuMjc1IDI5NC40NThMMzQxLjI4NyAzMDcuMzUzQzMyMC4yNTggMzI1LjI5MSAyNzEuNjM3IDM1Ny41OTQgMTkxLjExMiAzNjIuMDA5QzEwMC43MTkgMzY2LjkzIDYzLjA0MjUgMzM4LjAwMSA2Mi42OTA1IDMzNy43MDZMNTYuMzUxNyAzNDUuNDAzTDQ4IDM1NS4yNzNDNDkuNjAwOCAzNTYuNiA4NS43Mjg1IDM4NS4zMzUgMTcwLjU3NiAzODUuMzM1QzE3Ny41MiAzODUuMzM1IDE4NC44MTYgMzg1LjMzNSAxOTIuNDEyIDM4NC43NDZDMjg5Ljg3MyAzNzkuMzkxIDM0My40NzYgMzM3LjU3NSAzNjIuMjMxIDMxOS42MjlMMzgwLjY0MiAzMzAuNjM3QzM2OC4yNjEgMzQ2LjY1OCAzNTMuMDI1IDM2MC4zMzMgMzM1LjY3IDM3MC45ODJDMjc0LjUwNCA0MDkuODQ5IDE5Ni43MDggNDE0Ljg2NyAxNDIuMjQyIDQxMi4xNjJMMTQxLjA5NiA0MzQuODMxQzE1MC4yNDIgNDM1LjI3MyAxNTkuMDM1IDQzNS40NzEgMTY3LjU4IDQzNS40NzFDMzIxLjA0OCA0MzUuNDcxIDM4My4xMzIgMzY2LjcxOSA0MDAuNTM5IDM0Mi4wNjJMNDE0LjkyNSAzNTAuNDg3QzQwMS4xMzUgMzczLjYwMyAzODIuMzkzIDM5My41NjcgMzU5LjkzMSA0MDguOTM5QzMzMy4wMzQgNDI3LjM0NSAzMDEuNzM1IDQzOC41MzggMjY5LjExNCA0NDEuNDE1TDI3MS4xMTQgNDY0QzMwNy43MzkgNDYwLjc4NiAzNDIuODg4IDQ0OC4yMzYgMzczLjA4OSA0MjcuNTgxQzQwMy4yOSA0MDYuOTI2IDQyNy41MDggMzc4Ljg4MSA0NDMuMzQ5IDM0Ni4yMDdDNDU5LjE4NSAzMTMuNTI5IDQ2Ni4xMTYgMjc3LjM1OCA0NjMuNDM4IDI0MS4yNDdaTTM3NC44MSAyNDQuNzM5QzM2NC42MjYgMjQ0LjczOSAzNTYuMzY4IDIzNi42MTMgMzU2LjM2OCAyMjYuNTg2QzM1Ni4zNjggMjE2LjU2IDM2NC42MjEgMjA4LjQzMyAzNzQuODEgMjA4LjQzM0MzODQuOTkgMjA4LjQzMyAzOTMuMjQ3IDIxNi41NiAzOTMuMjQ3IDIyNi41ODZDMzkzLjI0NyAyMzYuNjEzIDM4NC45OTQgMjQ0LjczOSAzNzQuODEgMjQ0LjczOVoiIGZpbGw9IiNFQ0VDRUMiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMTkxXzQyOTAiPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K',
      rdns: 'io.xdefi',
    },
  },
] as unknown as (EIP6963ProviderDetail & { supportsMobileBrowser: boolean })[]
