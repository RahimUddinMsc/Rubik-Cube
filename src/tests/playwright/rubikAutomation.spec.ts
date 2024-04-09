import { test, expect, type Page } from '@playwright/test';

const buttonTimeoutMS = 500

//test setup functions to avoid repeated code
export async function goTo( page: Page ) {  
  await page.goto('http://localhost:3000/');  
}

test.beforeEach(async ({ page }) => {
  await goTo(page);
});

test.afterEach(async ({ page }) => {
  await goTo(page);
});

//All tests
test('start_panel_removed_freeplay', async ({ page }) => {  
  await page.getByRole('button', { name: 'Freeplay' }).click();

   // Assert that the div with ID 'rubiks_container_cub' is visible within 5 seconds
   await expect(page.locator('#rubiks_container_cube'), 'Failure - Start panel not removed (freeplay)').toBeVisible({ timeout: buttonTimeoutMS });
});

test('start_panel_removed_scramble', async ({ page }) => {  
  await page.getByRole('button', { name: 'Scramble' }).click();

   // Assert that the div with ID 'rubiks_container_cub' is visible within 5 seconds
   await expect(page.locator('#rubiks_container_cube'), 'Failure - Start panel not removed (scramble)').toBeVisible({ timeout: buttonTimeoutMS });
});

test('rubik_view_toggle', async ({ page }) => {  
  await page.getByRole('button', { name: 'Freeplay' }).click();

  //Toggle to exploded view
  await page.getByRole('button', { name: 'Explode' }).click();
  await expect(page.locator('#exploded_cube_container'), 'Failure - UI Explode failure').toBeVisible({ timeout: buttonTimeoutMS });

  //Toggle back to contracted view
  await page.getByRole('button', { name: 'Contract' }).click();
  await expect(page.locator('#default_cube_container'), 'Failure - UI Contract failure').toBeVisible({ timeout: buttonTimeoutMS });
});

test('rubik_cube_solve', async ({ page }) => {  
  await page.getByRole('button', { name: 'Scramble' }).click();
  await page.getByRole('button', { name: 'Explode' }).click();

  //Descramble buttons
  await page.getByRole('button', { name: 'D', exact: true }).click();
  await page.getByRole('button', { name: 'L\'' }).click();
  await page.getByRole('button', { name: 'B', exact: true }).click();
  await page.getByRole('button', { name: 'U\'' }).click();
  await page.getByRole('button', { name: 'R', exact: true }).click();
  await page.getByRole('button', { name: 'F\'' }).click();

  //solved notification should now show up following all correct changes
  await expect(page.locator('#rubik_solved_header'), 'Failure - UI Solved notification failure').toBeVisible({ timeout: buttonTimeoutMS });
});
