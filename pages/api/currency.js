import { data } from '../../utils/data'
const currency = data.countries

export default function handler(req, res) {
  res.status(200).json({ currency })
}
