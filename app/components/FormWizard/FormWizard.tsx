
// import { ValidatedForm } from 'remix-validated-form';
// import { z } from 'zod';
// import { withZod } from '@remix-validated-form/with-zod';
import { useState } from 'react';
import styles from './FormWizard.module.css';
import Button from '../Button';

export const formWizardLinks = () => {
  return [
    { rel: "stylesheet", href: styles }
  ];

}

const formConfig = {
  steps: [
    {
      title: 'Step 1',
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          required: true
        }
      ]
    },
    {
      title: 'Step 2',
      fields: [
        {
          name: 'phone',
          label: 'Phone',
          type: 'tel',
          required: true
        },
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          required: true
        }
      ]
    }
  ]

}

// export const validator = withZod(
//   z.object({
//     name: z
//       .string()
//       .min(2, { message: 'Name must be at least 2 characters' }),
//     email: z
//       .string()
//       .email("Must be a valid email"),
//     phone: z
//       .string()
//       .min(10, { message: 'Phone must be at least 10 characters' }),
//     address: z
//       .string()
//       .min(10, { message: 'Address must be at least 10 characters' })
//   })
// );


export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0)

  const handleSection = (action: string) => {
    if (action === 'next') {
      if (currentStep < formConfig.steps.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }
    if (action === 'prev') {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1)
      }
    }
  }
  return (
    <div className={styles['form-container']}>
      <div style={{ background: "#efefef", padding: '2rem' }}>
        {formConfig.steps.map((step, index) => {
          return (
            <div key={index} style={{ display: index === currentStep ? 'block' : 'none' }}>
              <h2>{step.title}</h2>
              <Button onClick={() => handleSection('prev')} label="Previous" variant="secondary" />
              <Button onClick={() => handleSection('next')} label="Next" />
            </div>
          )
        }
        )}
      </div>
      <div style={{ padding: '2rem' }}>
        <h3>On this page</h3>
        <ul>
          {formConfig.steps.map((stepData, index) => (
            <li key={index} style={{ marginBottom: '1rem' }} /* onClick={() => setCurrentStep(index)} */>
              {currentStep === index ? <strong>{stepData.title}</strong> : stepData.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}