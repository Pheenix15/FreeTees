useEffect(() => {
    // Adjust font size dynamically based on the chest area dimensions and text length
    const adjustFontSize = () => {
      if (textContainerRef.current) {
        const container = textContainerRef.current;
        let currentFontSize = fontSize;

        while (
          container.scrollHeight > container.clientHeight || 
          container.scrollWidth > container.clientWidth
        ) {
          currentFontSize -= 1; // Reduce font size
          container.style.fontSize = `${currentFontSize}px`;
        }

        setFontSize(currentFontSize); // Update font size state
      }
    };

    adjustFontSize();
  }, [customText, fontSize]);
