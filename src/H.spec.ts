import { render, screen } from "@testing-library/vue";
import H from "./H.vue";
import Region from "./Region.vue";
import { expect, it } from "vitest";
import { defineComponent } from "vue";

it("renders heading", () => {
  const Subject = defineComponent({
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { H, Region },
    template: `
			<h>first header</h>	
			<p>body</p>
			<region>
				<template #header>
					<h>second header</h>	
				</template>
				<p>body</p>
				<region>
					<template #header>
						<h>third header</h>
						<h>second third header</h>
					</template>
					<p>body</p>
				</region>
			</region>
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
