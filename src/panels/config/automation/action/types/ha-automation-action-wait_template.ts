import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import type { HaFormSchema } from "../../../../../components/ha-form/types";
import type { WaitAction } from "../../../../../data/script";
import type { HomeAssistant } from "../../../../../types";
import type { ActionElement } from "../ha-automation-action-row";
import "../../../../../components/ha-form/ha-form";

const SCHEMA: HaFormSchema[] = [
  {
    name: "wait_template",
    selector: {
      template: {},
    },
  },
  {
    name: "timeout",
    required: false,
    selector: {
      text: {},
    },
  },
  {
    name: "continue_on_timeout",
    selector: { boolean: {} },
  },
];

@customElement("ha-automation-action-wait_template")
export class HaWaitAction extends LitElement implements ActionElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public action!: WaitAction;

  public static get defaultConfig() {
    return { wait_template: "" };
  }

  protected render() {
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this.action}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;
  }

  private _computeLabelCallback = (schema: HaFormSchema): string =>
    this.hass.localize(
      `ui.panel.config.automation.editor.actions.type.wait_template.${
        schema.name === "continue_on_timeout" ? "continue_timeout" : schema.name
      }`
    );
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-automation-action-wait_template": HaWaitAction;
  }
}
