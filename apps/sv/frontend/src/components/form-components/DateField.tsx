// Copyright (c) 2024 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import { Box, Typography } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { dateTimeFormatISO } from '@lfdecentralizedtrust/splice-common-frontend-utils';
import { useFieldContext } from '../../hooks/formContext';

export interface DateFieldProps {
  title?: string;
  description?: string;
  minDate?: Dayjs;
}

export const DateField: React.FC<DateFieldProps> = props => {
  const { title, description, minDate } = props;
  const field = useFieldContext<string>();

  return (
    <Box>
      {title && (
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
      )}
      <DesktopDateTimePicker
        value={dayjs(field.state.value)}
        format={dateTimeFormatISO}
        minDateTime={minDate || dayjs()}
        ampm={false}
        onChange={newDate => field.handleChange(newDate?.format(dateTimeFormatISO)!)}
        slotProps={{
          textField: {
            fullWidth: true,
            variant: 'outlined',
          },
        }}
      />
    </Box>
  );
};
