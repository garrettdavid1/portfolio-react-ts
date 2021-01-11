class StartupMonitor {
	imagesExpected: number = 0;
	imagesLoaded: number = 0;
	incrementImagesLoaded = () => {
		this.imagesLoaded++;
	}
	registerImage = () => {
		this.imagesExpected++;
	}
	get allImagesLoaded(): boolean {
		return this.imagesExpected > 0 && this.imagesLoaded === this.imagesExpected;
	}
}

const startup = new StartupMonitor();
export default startup;