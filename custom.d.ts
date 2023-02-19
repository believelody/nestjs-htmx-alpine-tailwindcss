declare namespace Express {
  export interface Request {
    ctx?: object;
  }
}

declare namespace ExpressSession {
  export interface SessionData {
    ctx?: object;
  }
}
