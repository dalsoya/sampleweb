import express from 'express';
import videoCon from '../controllers/videoController';

const rootRouter = express.Router();

const { home, create } = videoCon;

rootRouter.get('/', home);
rootRouter.post('/create', create);

// rootRouter.route("/join").get(getJoin).post(postJoin);

// rootRouter.route("/login").get(getLogin).post(postLogin);

// rootRouter.get("/search", search);

export default rootRouter;
