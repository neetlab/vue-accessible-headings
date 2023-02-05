import { render } from "@testing-library/vue";
import { expect, it } from "vitest";
import { defineComponent } from "vue";
import { INJECTION_KEYS } from "./constants";
import { useLevel } from "./use-level";

it("accesses heading level", () => {
  const Subject = defineComponent({
    data() {
      return {
        level: useLevel(),
      };
    },
    template: `<div>{{level}}</div>`,
  });

  const { container } = render(Subject, {
    global: {
      provide: {
        [INJECTION_KEYS.HEADING_LEVEL]: 3,
      },
    },
  });
  expect(container.textContent).toBe("3");
});
