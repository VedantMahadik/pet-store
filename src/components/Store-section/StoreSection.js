import React from 'react'
import './StoreSection.css'
import Button from '../Button'

const StoreSection = () => {
	return (
		<>
			<div className='pets-container'>
				<h1 className='title'>Which side are you on?</h1>
				<div className='split left'>
					<div className='centered'>
						<img src='/images/cats1.jpg' alt='' />
						<div className='store-btns'>
							<Button
								className='btns'
								buttonStyle='btn--outline'
								buttonSize='btn--large'
								link='/pet/cat'
							>
								Buy a Cat
							</Button>
							<Button
								className='btns'
								buttonStyle='btn--primary'
								buttonSize='btn--large'
								link='/petStore'
							>
								Buy Cat products
							</Button>
						</div>
					</div>
				</div>
				<div className='split right'>
					<div className='centered'>
						<img src='/images/dog1.jpg' alt='' />
						<div className='store-btns'>
							<Button
								className='btns'
								buttonStyle='btn--outline'
								buttonSize='btn--large'
								link='/pet/dog'
							>
								Buy a Dog
							</Button>
							<Button
								className='btns'
								buttonStyle='btn--primary'
								buttonSize='btn--large'
								link='/petStore'
							>
								Buy Dog products
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default StoreSection
