import { Request, Response  } from "restify";

/**
 * GET /
 * Home page.
 */
export let index = (req: Request, res: Response) => {
  res.json({"success" : "yes"})
};
