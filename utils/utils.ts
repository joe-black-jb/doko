import pino from "pino";
import pretty from "pino-pretty";

// export const logger = pino({
//   transport: {
//     target: "pino-pretty",
//     options: {
//       colorize: true,
//     },
//   },
// });

const stream = pretty({
  colorize: true,
});
export const logger = pino(stream);

// export const logger = pino();
