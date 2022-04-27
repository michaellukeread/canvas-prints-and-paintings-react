import { useRouter } from 'next/router'

// items = ['Birds', 'Cliffs']

const useFilter = (filter, items) => {
  const router = useRouter()
  const { query } = router

  const handleSelect = () => e => {
    const isChecked = e.target.checked
    if (isChecked) {
      const isExisting = Boolean(query[filter])
      router.push({
        pathname: `/products`,
        query: {
          ...query,
          [filter]: isExisting ? `${query[filter]},${e.target.value}` : e.target.value
        }
      })
    } else {
      const trimmed = query[filter].split(',').filter(item => item !== e.target.value)
      const isntEmpty = Boolean(trimmed.length)

      const { [filter]: _, ...rest } = query

      router.push({
        pathname: `/products`,
        query: isntEmpty ? { ...query, [filter]: trimmed } : { ...rest }
      })
    }
  }

  const isExisting = Boolean(query[filter])

  const newItems = items.map(item => ({
    label: item,
    isChecked: isExisting ? query[filter].split(',').some(elem => elem === item) : false
  }))

  return { handleSelect, newItems }
}

export default useFilter
