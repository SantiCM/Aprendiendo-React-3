// @ts-check
import { test, expect } from '@playwright/test';

// TEST

const CAT_ENDPOINT_PREFIX = "https://cataas.com"

const LOCAL_HOST_URL = "http://localhost:5173/"

test('app shows random fact', async ({ page }) => {

  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole("paragraph")

  const image = await page.getByRole("img")

  const textContent = await text.textContent()

  const imageContet = await image.getAttribute("src")

  await expect(textContent?.length).toBeGreaterThan(0)

  await expect (imageContet?.startsWith(CAT_ENDPOINT_PREFIX)).toBeTruthy()

});