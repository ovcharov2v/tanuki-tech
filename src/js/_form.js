import IMask from "imask";

document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.section-vacancy__form')
	if(!form) return;

	// Input masks
	const phoneMask = IMask(
		document.querySelector('#phone'),
		{
			mask: '+{7}(000) 000-00-00'
		}
	)

	// Form submit
	if (form) {
		form.addEventListener('submit', (evt) => {
			evt.preventDefault()
			const data = new URLSearchParams(new FormData(form));
			fetch("https://ovcharov2v.github.io/tanuki-tech/index.html", {
				method: 'post',
				body: data,
			})
				.then((response) => {
					//response.json()
					// ----do something----
					showModal();
				})
			formReset()
		})
	}
	const formReset = () => {
		phoneMask.updateValue()
		form.reset()
	}

	const modal = document.querySelector('.modal')
	const modalCloseBtn = modal.querySelector('.modal__close')

	const showModal = () => {
		document.body.style.overflow = 'hidden'
		modal.style.display = 'flex'
		setTimeout(() => {
			modal.classList.add('modal--show')
		}, 50)
	}

	const closeModal = () => {
		modal.classList.remove('modal--show')
		setTimeout(() => {
			document.body.style.overflow = ''
			modal.style.display = ''
		}, 300)
	}

	modalCloseBtn.addEventListener('click', () => closeModal())

	modal.addEventListener('click', (evt) => {
		if(!evt.target.closest('.modal__window')) {
			closeModal()
		}
	})
})
