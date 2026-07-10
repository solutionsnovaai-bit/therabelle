// Todo o conteúdo editável do site — textos, links de WhatsApp, procedimentos,
// terapias, especialistas, endereço/horário e palavras do rotator.

export const WA_NUMBER = '5519986108841';

function buildWa(msg) {
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
}

export const WA_GENERAL_MESSAGE = 'Olá! Vim pelo site da Thera Belle e gostaria de agendar uma avaliação.';
export const waGeneral = buildWa(WA_GENERAL_MESSAGE);

export function waFor(nome) {
  return buildWa('Olá! Vim pelo site da Thera Belle e tenho interesse em ' + nome + '. Pode me passar mais informações?');
}

export const NAV_LINKS = [
  { href: '#procedimentos', label: 'Procedimentos' },
  { href: '#bem-estar', label: 'Bem-estar' },
  { href: '#especialistas', label: 'Especialistas' },
  { href: '#visita', label: 'Visita' },
];

export const NAV_CTA_LABEL = 'Agendar avaliação';
export const BRAND_NAME = 'THERA BELLE';

export const HERO = {
  eyebrow: 'ESTÉTICA AVANÇADA & BEM-ESTAR · PIRACICABA',
  titleWords: ['Realce', 'a', 'beleza', 'que'],
  titleEmWords: ['já', 'é', 'sua'],
  subtitle: 'Procedimentos estéticos e terapias de bem-estar com técnica, delicadeza e um cuidado que você sente desde a primeira conversa.',
  specialtyLabelStatic: 'ESTÉTICA AVANÇADA & BEM-ESTAR',
  specialtyLabel: 'ESPECIALISTAS EM',
  srOnlySpecialties: 'Especialistas em toxina botulínica, massagem relaxante, preenchimento labial, reflexologia, bioestimulador, escalda pés, fios de PDO, drenamax, harmonização e bem-estar.',
  primaryCta: 'Agendar minha avaliação',
  secondaryCta: 'Conhecer os procedimentos',
  bgDesktop: '/hero-desktop.jpg',
  bgMobile: '/hero-mobile.jpg',
};

export const SPECIALTY_WORDS = [
  'Toxina botulínica', 'Massagem relaxante', 'Preenchimento labial', 'Reflexologia',
  'Bioestimulador', 'Escalda pés', 'Fios de PDO', 'Drenamax', 'Harmonização', 'Bem-estar',
];

export const ESPACO = {
  eyebrow: 'O ESPAÇO',
  titlePlain: 'Onde o cuidado ',
  titleEm: 'acontece',
  body: 'Um ambiente acolhedor, preparado para você relaxar do momento em que chega até a hora de ir embora — porque conforto também faz parte do resultado.',
};

export const CLINIC_PHOTOS = [
  { src: '/clinica-recepcao.jpg', alt: 'Recepção da Thera Belle com parede de tijolinhos terracota e espelho dourado' },
  { src: '/clinica-logo.jpg', alt: 'Logotipo Thera Belle em relevo dourado na parede de atendimento' },
  { src: '/clinica-sala.jpg', alt: 'Sala de procedimentos da Thera Belle com maca e espelho' },
  { src: '/clinica-espera.jpg', alt: 'Ambiente de espera da Thera Belle com poltronas e detalhes em terracota' },
  { src: '/clinica-cafe.jpg', alt: 'Recepção com cantinho do café da Clínica Thera Belle' },
  { src: '/clinica-ambiente.jpg', alt: 'Ambiente interno da recepção da Clínica Thera Belle' },
  { src: '/clinica-jardim-entrada.jpg', alt: 'Jardim interno da Clínica Thera Belle visto da entrada' },
  { src: '/clinica-jardim-plantas.jpg', alt: 'Plantas do jardim interno da Clínica Thera Belle' },
  { src: '/clinica-avaliacao.jpg', alt: 'Sala de atendimento e avaliação da Clínica Thera Belle' },
];

export const MANIFESTO = {
  eyebrow: 'A THERA BELLE',
  titlePlain: 'Menos padrão. ',
  titleEm: 'Mais você.',
  paragraphs: [
    'Aqui, estética não é sobre virar outra pessoa — é sobre ajustar pequenos detalhes até o espelho concordar com o que você já sente por dentro. Cada protocolo começa com uma avaliação honesta e termina em um resultado que ninguém aponta, só percebe.',
    'Da toxina botulínica ao escalda pés, tudo acontece no mesmo lugar: um espaço pensado para você chegar como está e sair como merece.',
  ],
};

export const ESPECIALISTAS = {
  eyebrow: 'QUEM CUIDA DE VOCÊ',
  titlePlain: 'Duas especialistas, ',
  titleEm: 'um mesmo cuidado',
  people: [
    {
      name: 'Júlia Torin Formagio',
      role: 'Biomédica Esteta',
      photo: '/julia.jpg',
      photoAlt: 'Júlia Torin Formagio, biomédica esteta da Thera Belle',
      bio: 'Formada há 7 anos e há 5 dedicada à estética avançada, Júlia une precisão técnica e olhar artístico. Da toxina terapêutica à harmonização, cada protocolo é desenhado para o seu rosto, o seu corpo e o seu momento.',
    },
    {
      name: 'Andréa Torin',
      role: 'Massoterapeuta',
      photo: '/andrea.jpg',
      photoAlt: 'Andréa Torin, massoterapeuta da Thera Belle',
      objectPosition: 'center',
      bio: 'Especialista em terapias de bem-estar, Andréa cuida do que não aparece no espelho: o relaxamento profundo, o equilíbrio do corpo e a sensação de sair renovada de cada sessão.',
    },
  ],
};

export const PROCEDIMENTOS = {
  eyebrow: 'ESTÉTICA AVANÇADA',
  titlePlain: 'Ciência a favor da sua ',
  titleEm: 'naturalidade',
  items: [
    { name: 'Toxina botulínica', desc: 'Suaviza linhas de expressão com naturalidade — e também trata bruxismo, enxaqueca e sudorese excessiva.', badge: 'Também terapêutica' },
    { name: 'Preenchimento facial e labial', desc: 'Contorno e volume na medida certa, respeitando a harmonia do seu rosto.' },
    { name: 'Harmonização glútea', desc: 'Curvas com projeção e firmeza, sem cirurgia.' },
    { name: 'Bioestimulador de colágeno', desc: 'Ativa a produção natural de colágeno — firmeza que evolui com o tempo.' },
    { name: 'Fios de PDO', desc: 'Efeito lifting imediato e estímulo de colágeno, sem cortes.' },
    { name: 'Intradermoterapia', desc: 'PEIM para vasinhos e enzimas para gordura localizada, direto no ponto.' },
    { name: 'Microagulhamento', desc: 'Renovação da pele: textura, poros, cicatrizes de acne e luminosidade.' },
  ],
};

export const BEM_ESTAR = {
  eyebrow: 'BEM-ESTAR & TERAPIAS',
  titlePlain: 'O cuidado que o espelho ',
  titleEm: 'não mostra',
  intro: 'Nem todo resultado se mede em antes e depois. Alguns se sentem: no corpo mais leve, na mente mais quieta, no dia que termina melhor do que começou.',
  items: [
    { name: 'Massagem relaxante', desc: 'Uma pausa para o corpo desacelerar e a mente respirar.' },
    { name: 'Drenamax', desc: 'Drenagem potencializada contra inchaço e retenção.' },
    { name: 'Reflexologia', desc: 'Estímulos nos pés que reequilibram o corpo inteiro.' },
    { name: 'Escalda pés', desc: 'Ritual de calor e aromas para encerrar o dia mais leve.' },
  ],
};

export const SUA_VISITA = {
  eyebrow: 'SUA VISITA',
  titlePlain: 'Estamos te ',
  titleEm: 'esperando',
  address: 'Rua Samuel Neves, 1747 — Jardim Europa · Piracicaba/SP',
  hours: 'Segunda a sábado · 9h às 20h',
  mapsHref: 'https://www.google.com/maps/place/Cl%C3%ADnica+Thera+Belle+-+Est%C3%A9tica+e+Massoterapia/@-22.7207717,-47.6358328,17z/data=!3m1!4b1!4m6!3m5!1s0x94c631df4174213d:0x9b0c1fdf4d96650c!8m2!3d-22.7207717!4d-47.6358328!16s%2Fg%2F11zgrkp4k8?entry=ttu',
  mapsLabel: 'Como chegar',
  waLabel: 'Agendar pelo WhatsApp',
  photo: '/clinica-atendimento.jpg',
  photoAlt: 'Sala de atendimento da Thera Belle em Piracicaba',
};

export const CTA_FINAL = {
  eyebrow: 'PRÓXIMO PASSO',
  titlePlain: 'Sua avaliação começa com ',
  titleEm: 'uma conversa',
  quote: 'Cuidar de si não é vaidade. É a forma mais honesta de se respeitar.',
  ctaLabel: 'Agendar pelo WhatsApp',
};

export const FOOTER = {
  brand: 'THERA BELLE',
  address: 'Rua Samuel Neves, 1747 — Jardim Europa, Piracicaba/SP',
  hours: 'Segunda a sábado, 9h às 20h',
  credit: 'Desenvolvido por Nova AI Solutions',
};

export const WHATSAPP_FAB = {
  ariaLabel: 'Agendar avaliação pelo WhatsApp',
  label: 'Agendar avaliação',
};

export const LOADING_SCREEN = {
  logo: '/load-logo.jpg',
  logoAlt: 'Thera Belle',
};
