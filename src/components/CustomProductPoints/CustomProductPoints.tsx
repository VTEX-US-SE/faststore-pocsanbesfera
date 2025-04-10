import { useState } from 'react'
import styles from './customproductpoints.module.scss'
import { usePDP } from '@faststore/core'
import InputMask from 'react-input-mask'

export default function CustomProductPoints() {
  const { data: dataProduct } = usePDP()
  const [cpf, setCpf] = useState('')
  const [error, setError] = useState('')
  const [agreed, setAgreed] = useState(false)
  const onlyNumbers = cpf.replace(/\D/g, '')
  const isCpfValid = onlyNumbers.length === 11 && error === ''
  const canProceed = isCpfValid && agreed

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCpf(value)

    const onlyNumbers = value.replace(/\D/g, '')

    if (onlyNumbers.length === 11) {
      setError('CPF inválido')
    } else {
      setError('')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{dataProduct?.product?.seo?.title}</h1>

      <div>
        <div className={styles.banner}>
          <img src={dataProduct?.product?.image[0]?.url} alt="Banner" />
        </div>

        <div className={styles.pointsBox}>
          <span className={styles.smallText}>Até</span>
          <span className={styles.bigNumber}>
            {dataProduct?.product?.offers?.offers?.[0]?.price}
          </span>
          <div className={styles.pointsText}>
            <span className={styles.highlightText}>Pontos</span>
            <span className={styles.text}>Esfera*</span>
          </div>
          <span className={styles.smallText}>a cada</span>
          <span className={styles.bigNumber}>1</span>
          <div className={styles.pointsText}>
            <span className={styles.highlightText}>
              Real <span>em</span>
            </span>
            <span className={styles.text}>compra</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Para usar esse benefício,{' '}
          <span className={styles.link}>acesse sua conta Esfera</span> ou
        </p>

        <div className={styles.wrapper}>
          <InputMask
            mask="999.999.999-99"
            value={cpf}
            onChange={handleChange}
            className={`${styles.input} ${error ? styles.errorBorder : ''}`}
            placeholder="Digite CPF ou CNPJ"
          />
          {error && <p className={styles.errorText}>{error}</p>}
        </div>

        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree">
            Estou de acordo que estes dados estão sendo armazenados para fins de
            acúmulo de pontos na Esfera.
          </label>
        </div>

        {!canProceed ? (
          <button className={styles.partnerButton} disabled={!canProceed}>
            Ir para o site do parceiro
          </button>
        ) : (
          <a
            className={`${styles.partnerButton}`}
            href={dataProduct?.product?.redirectUrl}
            target="_blank"
            role="button"
            rel="noreferrer"
          >
            Ir para o site do parceiro
          </a>
        )}
      </div>
    </div>
  )
}
