import { css } from "lit-element";

export const traceTabStyles = css`
  .tabs {
    background-color: var(--primary-background-color);
    border-top: 1px solid var(--divider-color);
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    padding-left: 4px;
  }

  .tabs.top {
    border-top: none;
  }

  .tabs > * {
    padding: 2px 16px;
    cursor: pointer;
    position: relative;
    bottom: -1px;
    border-bottom: 2px solid transparent;
    user-select: none;
  }

  .tabs > *.active {
    border-bottom-color: var(--accent-color);
  }
`;