export const parsePalleteName = styleColor => {
  // eslint-disable-next-line no-unused-vars
  const [_, color, tone, opacity] =
    styleColor?.match(
      // eslint-disable-next-line max-len
      /(lightBlueCash|darkBlueCash|greyCash|goldCash|cyanCash|success|error|warning)(100|200|300|400|500)(-[0-9]{2})?/
    ) || []

  return [color, tone, opacity]
}
