// @ts-check
import { test, expect } from '@playwright/test';

// TEST

//¿Como se descarga?

// Damos el comando : npm init playwright@latest              

// Das js, das test, das en false, y das true, en ese orden

// el archivo playwright.confi se le da con la esxtension .cjs

// y para correr el test es npm init playwright@latest

const CAT_ENDPOINT_PREFIX = "https://cataas.com"

const LOCAL_HOST_URL = "http://localhost:5173/"

test('app shows random fact', async ({ page }) => {

  // await de la page del localhost
  await page.goto(LOCAL_HOST_URL)

  // recojemos el texto del await de la page, damos que el rol es el p
  // generalmente se la un id pero en este caso como solo es una test, lo dejamos asi
  const text = await page.getByRole("paragraph")

  // lo mismo con la imagen
  const image = await page.getByRole("img")

  // queremos saber el contenido del text
  const textContent = await text.textContent()

  // y el atributom src de la img
  const imageContet = await image.getAttribute("src")

  // esperamos que que el contenido, cuanto viene, y que sea mayor a 0
  await expect(textContent?.length).toBeGreaterThan(0)
  
  // esperemos que la imagen, contenga, la url de la api y pase
  await expect (imageContet?.startsWith(CAT_ENDPOINT_PREFIX)).toBeTruthy()

});