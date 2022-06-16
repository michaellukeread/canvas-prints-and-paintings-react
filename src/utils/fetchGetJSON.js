const fetchGetJSON = async url => {
  try {
    const data = await fetch(url).then(res => res.json())
    return data
  } catch (err) {
    throw err
  }
}

export default fetchGetJSON
