describe('List', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the list of recipes', async () => {
    await expect(element(by.id('recipeList'))).toBeVisible();
  });

  it('should show the ingredients for one recipe', async () => {
    await element(by.text('Biscuits and Gravy')).tap();
    await expect(element(by.id('ingredients'))).toBeVisible();
  });

  it('should show the ingredients for Biscuits and Gravy', async () => {
    await element(by.text('Biscuits and Gravy')).tap();
    await expect(element(by.text("Biscuits"))).toBeVisible();
    await expect(element(by.text("Gravy"))).toBeVisible();
  });

  // it('should show the ingredients for Tacos', async () => {
  //   await element(by.text('Tacos')).tap();
  //   await expect(element(by.text("Beef"))).toBeVisible();
  //   await expect(element(by.text("Tortilla"))).toBeVisible();
  // });
});
