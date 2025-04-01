import { useState, useEffect } from 'react'
import type { GetCookieByDocumentQuery } from '@faststore/core/api'
import { GetCookieByDocumentDocument as getCookieByDocument } from '@faststore/core/api'
import { useQuery_unstable as useQuery } from '@faststore/core/experimental'

export const useCookieByDocument = () => {
  const [dId, setDId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const documentId = urlParams.get('dId')
    const decodedValue = documentId ? atob(documentId) : null
    setDId(decodedValue)
    setIsLoading(false)
  }, [])

  const query = useQuery<GetCookieByDocumentQuery>(
    getCookieByDocument,
    { dId },
    { doNotRun: !dId }
  )

  return { ...query, isLoading }
}
