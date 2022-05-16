export default function Register() {
  return (
    <Box
      sx={{
        width: 400,
        height: 400,
        boxShadow: 24,
        backgroundColor: "white",
        alignCenter: "center",
        padding: 4,
        borderRadius: 5,
      }}
    >
      <Typography align="center" color={"black"} fontSize="2rem">
        {" "}
        Login{" "}
      </Typography>
      <Box style={{ padding: 5 }} marginTop={5}>
        <Stack gap={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />

          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button variant="contained" sx={{ borderRadius: 10 }}>
            LOGIN
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}