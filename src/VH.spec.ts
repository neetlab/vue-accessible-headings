import { render, screen } from "@testing-library/vue";

import { expect, it } from "vitest";
import { defineComponent } from "vue";

import VH from "./VH.vue";
import VSection from "./VSection.vue";

it("renders heading", () => {
  const Subject = defineComponent({
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { VH, VSection },
    template: `
      <v-h>first header</v-h>	
      <p>body</p>
      <v-section>
        <v-h>second header</v-h>	
        <p>body</p>
        <v-section>
          <v-h>third header</v-h>
          <v-h>second third header</v-h>
          <p>body</p>
        </v-section>
			</v-section>
		`,
  });

  render(Subject);

  expect(
    screen.getByRole("heading", { level: 1, name: "first header" })
  ).not.toBeNull();

  expect(
    screen.getByRole("heading", { level: 2, name: "second header" })
  ).not.toBeNull();

  expect(
    screen.getByRole("heading", { level: 3, name: "third header" })
  ).not.toBeNull();
  expect(
    screen.getByRole("heading", { level: 3, name: "second third header" })
  ).not.toBeNull();
});
