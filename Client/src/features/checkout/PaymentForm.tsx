import { Grid2, Paper, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("cardname", { required: "Card name is required" })}
          label="Enter card name"
          fullWidth
          autoFocus
          sx={{ mb: 2 }}
          size="small"
          error={!!errors.cardname}
        ></TextField>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          {...register("cardnumber", { required: "Card number is required" })}
          label="Enter card number"
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          error={!!errors.cardnumber}
        ></TextField>
      </Grid2>

      <Grid2 size={{ xs: 6, md: 4 }}>
        <TextField
          {...register("cardexpiremonth", {
            required: "Expiry month is required",
          })}
          label="Enter expiry month"
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          error={!!errors.cardexpiremonth}
        ></TextField>
      </Grid2>

      <Grid2 size={{ xs: 6, md: 4 }}>
        <TextField
          {...register("cardexpireyear", {
            required: "Expiry year is required",
          })}
          label="Enter expiry year"
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          error={!!errors.cardexpireyear}
        ></TextField>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextField
          {...register("cardcvc", { required: "Cvc is required" })}
          label="Enter cvv"
          fullWidth
          sx={{ mb: 2 }}
          size="small"
          error={!!errors.cardcvc}
        ></TextField>
      </Grid2>

      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Valid Card Info:</strong> John Doe - 5528790000000008 - 12 -
        2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Not Sufficient Funds Card Info:</strong> John Doe -
        4111111111111129 - 12 - 2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Do Not Honour Card Info:</strong> John Doe - 4129111111111111 -
        12 - 2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Invalid Transaction Card Info:</strong> John Doe -
        4128111111111112 - 12 - 2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Lost Card Info:</strong> John Doe - 4127111111111113 - 12 - 2030
        - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Stolen Card Info:</strong> John Doe - 4126111111111114 - 12 -
        2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Expired Card Info:</strong> John Doe - 4125111111111115 - 12 -
        2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>Invalid cvc2 Card Info:</strong> John Doe - 4124111111111116 -
        12 - 2030 - 123
      </Paper>
      <Paper sx={{ mb: 1, boxShadow: 0 }}>
        <strong>
          If You Want To Check Other Error Card Types, Error Info Links For:
        </strong>
        <ul>
          <li>
            <a href="https://github.com/iyzico/iyzipay-dotnet">
              https://github.com/iyzico/iyzipay-dotnet
            </a>
          </li>
          <li>
            <a href="https://docs.iyzico.com/ek-bilgiler/hata-kodlari">
              https://docs.iyzico.com/ek-bilgiler/hata-kodlari
            </a>
          </li>
        </ul>
      </Paper>
    </Grid2>
  );
}
