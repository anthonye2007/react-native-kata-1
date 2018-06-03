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
});
