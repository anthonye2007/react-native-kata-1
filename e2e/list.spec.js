describe('List', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the list of recipes', async () => {
    await expect(element(by.id('recipeList'))).toBeVisible();
  });
});
