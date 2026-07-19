import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Injetor OpenCode do plugin deploy. Le a skill de bootstrap e a injeta no
// inicio de cada mensagem, para que ela valha desde o primeiro turno.
// Ajuste SKILL_BOOTSTRAP para a pasta da sua skill de entrada em skills/.
const SKILL_BOOTSTRAP = "usando-o-deploy";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(__dirname, '..', '..');

const lerBootstrap = () => {
  try {
    return fs.readFileSync(path.join(raiz, 'skills', SKILL_BOOTSTRAP, 'SKILL.md'), 'utf8');
  } catch { return ''; }
};

export const plugin = async ({ client, directory }) => {
  const bootstrap = lerBootstrap();
  return {
    'chat.message': async (input, output) => {
      if (bootstrap && output?.parts) {
        output.parts.unshift({ type: 'text', text: bootstrap });
      }
    },
  };
};
