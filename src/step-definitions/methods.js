class Methods {

  async getElementByText(txt) {
    return $(`//*[(text() = '${txt}') or (normalize-space(.) = '${txt}')]`);
  }

  async getText(element) {
    await element.waitForDisplayed();
    return await element.getText();
  }

  async getTextByArrayElements(arrayOfElements) {
    var nArray = [];
    for (let i = 0; i < arrayOfElements.length; i++) {
      nArray.push(await this.getText(arrayOfElements[i]))
    }
    return nArray;
  }

  async setClick(element) {
    await element.waitForDisplayed();
    await element.click();
  }

  async setConsole(txt) {
    console.log("==========================================");
    console.log(txt);
    console.log("==========================================");
  }

  async setText(element, txt) {
    await element.waitForDisplayed();
    await element.setValue(null);
    await this.setClick(element);
    await element.setValue(txt);
  }
}

module.exports = new Methods();
