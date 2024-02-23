import { Router } from 'express';
import { runQuery } from '@sveltekit-board/db';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let data = await runQuery(async (run) => {
            let gameCenters = await run("SELECT * FROM `gamecenter`");
            let histories = await run("SELECT * FROM `history`");

            return {
                gameCenters,
                histories
            }
        });

        res.send(JSON.stringify(data));
        res.end();
    }
    catch (err) {
        console.log(err);
        res.status(500);
        res.send();
        res.end();
    }
})

export default router;