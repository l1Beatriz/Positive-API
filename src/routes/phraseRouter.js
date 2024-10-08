import express from "express";
import PhraseController from "../controller/PhraseController.js";

const router = express.Router();

router.get("/", PhraseController.index);
router.get("/frases", PhraseController.findPhrases);
router.get("/frases/:id", PhraseController.findPhraseById);
router.post("/frases/cadastrar", PhraseController.registerPhrase);
router.put("/frase/atualizar/:id", PhraseController.changePhrase);
router.delete("/frase/deletar/:id", PhraseController.deletePhrase);
 
export default router;