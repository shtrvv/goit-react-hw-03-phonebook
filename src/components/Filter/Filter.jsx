import { Label, Input } from "./Filter.styled"

const Filter = ({ handleChangeFilter, filter }) => {
  return (
      <Label>
          Find contacts by name
            <Input type="text" onChange={handleChangeFilter} value={filter} />
      </Label>
  )
}

export default Filter