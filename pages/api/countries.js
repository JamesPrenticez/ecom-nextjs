import { data } from '../../utils/data'
const countries = data.countries

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(countries))
}
