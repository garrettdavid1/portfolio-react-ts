class StartupMonitor {
	imagesExpected: number = 0;
	imagesLoaded: number = 0;
	onImageLoad: (imagesLoaded: number) => void = () => {};
	onAllImagesLoaded: () => void = () => {};
	incrementImagesLoaded = () => {
		this.imagesLoaded++;
		this.onImageLoad(this.imagesLoaded);

		if(this.imagesLoaded === this.imagesExpected) 
			this.onAllImagesLoaded();
	}
	registerImage = () => {
		this.imagesExpected++;
	}
	registerForImageLoadUpdates = (onImageLoad: (imagesLoaded: number) => void, onAllImagesLoaded: () => void) => {
		this.onImageLoad = onImageLoad;
		this.onAllImagesLoaded = onAllImagesLoaded;
	}
	get allImagesLoaded(): boolean {
		return this.imagesExpected > 0 && this.imagesLoaded === this.imagesExpected;
	}
}

const startup = new StartupMonitor();
export default startup;