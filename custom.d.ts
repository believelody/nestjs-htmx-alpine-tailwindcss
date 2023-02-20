declare namespace Express {
  export interface Request {
    ctx?: HttpContext;
    session?: SessionData;
  }
}

declare namespace ExpressSession {
  export interface SessionData {
    ctx?: HttpCOntext;
  }
}
