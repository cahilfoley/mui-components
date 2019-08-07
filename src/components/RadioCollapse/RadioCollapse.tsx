import React, { useMemo, useCallback, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(
  theme => ({
    formControl: {
      margin: theme.spacing(1),
    },
    formLabel: {
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      width: '100%',
    },
    group: {
      margin: theme.spacing(1, 0),
    },
  }),
  { name: 'RadioCollapse' },
)

export interface RadioCollapseProps {
  options: Record<string, string>
  onChange: (value: string) => void
  value: string
  label: string
  helperText?: string
  name?: string
  showNoSelection?: boolean
}

const RadioCollapse = (props: RadioCollapseProps) => {
  const {
    onChange,
    options,
    label,
    value,
    helperText,
    name,
    showNoSelection,
  } = props
  const classes = useStyles({})

  const [open, setOpen] = useState(false)

  const toggleCollapse = useCallback(() => setOpen(x => !x), [])

  const handleChange = useCallback(
    (event: React.ChangeEvent<{}>) =>
      onChange((event.target as HTMLInputElement).value),
    [onChange],
  )

  const optionControls = useMemo(
    () =>
      Object.entries(options).map(([optValue, optLabel]) => (
        <FormControlLabel
          key={optValue}
          value={optValue}
          label={optLabel}
          control={<Radio />}
        />
      )),
    [options],
  )

  return (
    <FormControl component="fieldset" className={classes.formControl} fullWidth>
      <FormLabel
        component="legend"
        onClick={toggleCollapse}
        className={classes.formLabel}
      >
        {label} {value && <>({value})</>}{' '}
        {open ? <ExpandLess /> : <ExpandMore />}
      </FormLabel>
      <Collapse in={open}>
        <RadioGroup
          aria-label={label}
          name={name}
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          {showNoSelection && (
            <FormControlLabel value="" control={<Radio />} label="None" />
          )}
          {optionControls}
        </RadioGroup>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </Collapse>
    </FormControl>
  )
}

export default RadioCollapse
