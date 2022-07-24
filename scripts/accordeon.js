const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item');

    const closeOther = (indexClickedContent) => {
        chItems.forEach((item, index) => {
            const chButton = item.querySelector('.characteristics__title');
            const chContent = item.querySelector('.characteristics__description');
            if (index === indexClickedContent) {
                if (chContent.classList.contains('open')) {
                    chContent.style.height = ''
                } else {
                    chContent.style.height = chContent.scrollHeight + 'px';
                }
                chButton.classList.toggle('active')
                chContent.classList.toggle('open')

            } else {
                chButton.classList.remove('active')
                chContent.classList.remove('open')
                chContent.style.height = ''
            }
        })
    }

    chItems.forEach((item, index) => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');
        chButton.addEventListener('click', () => {
            closeOther(index)
        })
    })
}
accordeon()