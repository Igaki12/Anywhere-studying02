import { useState } from 'react'
import imageSample1 from './img/question/sample.png'
import imageSample2 from './img/answer/sampleAnswer.JPG'
import ans2 from './img/answer/DSC_0188.JPG'
import attendance1 from './img/answer/attendance1-1.jpg'
import attendance2 from './img/answer/attendance2-1.jpg'
import attendance3 from './img/answer/attendance3-1.jpg'

export const useQuestionList = () => {
  const [questionList, setQuestionList] = useState([
    // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
    {
      groupTag: '出席確認など',
      groupContents: [
        {
          detailInfo: '4/27',
          questionImg: [],
          questionSentence: 'ぶどう膜はどれか',
          choices: ['脈絡膜', '角膜', '水晶体', '強膜', '網膜'],
          answerImg: [],
          answer: '',
          commentary:
            '脈絡膜choroid（暗箱）：強膜と網膜の間に存在する薄い膜で、豊富なメラニン色素が光を吸収する。脈絡膜に分布する毛様体血管系は網膜との境界付近に毛細血管網を作り、網膜の外層を栄養する。脈絡膜はまた、眼球前部に分布する神経の通路ともなっている。',
        },
        {
          detailInfo: '4/27',
          questionImg: [],
          questionSentence: '角膜反射の求心路はどれか',
          choices: ['三叉神経', '動眼神経', '外転神経', '滑車神経', '顔面神経'],
          answerImg: [],
          answer: '',
          commentary:
            '三叉神経は角膜反射（眼臉の反射的閉合）に関与する体性求心性線維を出す。実際に眼臉を閉合するのは顔面神経。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '交感神経の神経伝達物質は節前・節後線維ともにノルアドレナリンである',
            '副交感神経の節前線維は脳幹と仙髄の側角にある神経細胞に発する',
            '交感神経の節前線維は胸髄と腰髄の側角にある神経細胞に発する',
            '自律神経は体温調節、循環、呼吸、消化、分泌等の生命維持機能を調節する',
            '副交感神経節は効果器の近くにある',
          ],
          answerImg: [],
          answer:
            '交感神経の神経伝達物質は節前・節後線維ともにノルアドレナリンである',
          commentary:
            '交感神経の神経伝達物質は節前線維はアセチルコリン、節後線維はノルアドレナリンである（例外あり：副腎髄質）',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '舌下神経は頚神経叢の一部である。',
            '頚神経叢は鎖骨上神経、頚横神経、大耳介神経、小後頭神経、横隔神経、頚神経ワナで構成される。',
            '頚神経叢の枝は頚部の皮膚、舌骨下筋群、横隔膜に分布する。',
            'ホーナー症候群は眼球およびその周囲を正常な状態に維持する交感神経支配の異常によって発症する。',
          ],
          answerImg: [],
          answer: '舌下神経は頚神経叢の一部である。',
          commentary:
            '舌下神経は頚神経叢の一部（上部）と伴行している部分もあるが、繋がりは無い。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '上部腕神経叢の損傷で尺骨神経と正中神経の機能が脱落する。',
            '尺骨神経の障害で鷲手になる。',
            '橈骨神経の障害で下垂手になる。',
            '猿手は正中神経の障害で起こる。',
          ],
          answerImg: [],
          answer: '上部腕神経叢の損傷で尺骨神経と正中神経の機能が脱落する。',
          commentary:
            '尺骨神経と正中神経の機能が脱落するのは下部腕神経叢の損傷。',
        },
        {
          detailInfo: '5/11',
          questionImg: [],
          questionSentence: '誤っているものはどれか。一つ選べ。',
          choices: [
            '肋間神経ブロックのためには麻酔薬の入った注射針を必ず神経に当てなければならない。',
            '肋間神経は，胸壁と腹壁を形成する骨格筋を支配するとともに、胸壁と腹壁の皮膚にも分布する。',
            '脊髄神経の後枝は体幹後側の筋（固有背筋）および皮膚に分布する。',
            '胸腔内に貯留した空気や液体を体外に排除するための手技として、胸腔ドレナージや胸腔穿刺がある。',
          ],
          answerImg: [],
          answer:
            '肋間神経ブロックのためには麻酔薬の入った注射針を必ず神経に当てなければならない。',
          commentary: '部分麻酔のときと同様に、注射は神経周辺であればよい。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence:
            '右眼に光を当てると右眼縮瞳（−）、左眼縮瞳（−）、左眼に光を当てると左眼縮瞳（＋）、右眼縮瞳（＋）だった。障害されているのはどれか？',
          choices: [
            '右視神経',
            '左視神経',
            '左動眼神経',
            '右動眼神経',
            '視交差',
          ],
          answerImg: [attendance2, attendance3],
          answer: '',
          commentary:
            '視交叉以降では視神経線維の半分は反対側に行くため、左右のどちらかからの光刺激もE-W核に届き縮瞳する。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence: '視神経の走行で正しいのはどれか？',
          choices: [
            '網膜ー視神経ー視交差ー視索ー外側膝状体ー視放線ー視覚中枢 ',
            '網膜ー視放線ー視交差ー外側膝状体ー視索ー視神経ー視覚中枢',
            '網膜ー視神経ー視交差ー視索ー視放線ー外側膝状体ー視覚中枢',
            '網膜ー視索ー視交差ー視神経ー外側膝状体ー視放線ー視覚中枢 ',
          ],
          answerImg: [attendance1],
          answer: '',
          commentary: '外側膝状体は視床の部位。',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence:
            '甲状腺の手術後にみられる嗄声の原因となる神経はどれか？',
          choices: ['迷走神経', '顔面神経', '舌咽神経', '副神経'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/13',
          questionImg: [],
          questionSentence: '味覚を伝える神経細胞が含まれるのは次のどれか？',
          choices: ['膝神経節', '顎下神経節', '耳神経節', '翼口蓋神経節'],
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '前脳から発生するのは次のどれか？',
          choices: ['視床下部', '小脳', '延髄', '橋', '脊髄'],
          answerImg: [],
          answer: '',
          commentary:
            '前脳・中脳・菱脳という3つの神経管のふくらみ（脳胞）のうち、前脳は終脳と間脳に分岐し、菱脳は後脳と髄脳に分かれる。視床下部は間脳に属する。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '脳脊髄液の流れとして正しいのはどれか？',
          choices: [
            '脈絡叢ー側脳室ー第３脳室ー中脳水道ー第４脳室ー脳表ーくも膜顆粒',
            '脈絡叢ー側脳室ー中脳水道ー第３脳室ー第４脳室ー脳表ーくも膜顆粒',
            'くも膜顆粒ー側脳室ー第３脳室ー中脳水道ー第４脳室ー脳表ー脈絡叢',
            '脈絡叢ー第３脳室ー側脳室ー中脳水道ー第４脳室ー脳表ーくも膜顆粒',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '全体としては動脈→脳脊髄液→静脈の流れ。側脳室→第3脳室は室間孔（モンロー孔）、第3脳室→第4脳室は中脳水道がつなぐ。クモ膜顆粒から静脈洞に脊髄液が吸収される。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: 'レンズ核を潅流する動脈は次のどれか？',
          choices: [
            '中大脳動脈',
            '前交通動脈',
            '前大脳動脈',
            '後交通動脈',
            '後大脳動脈',
          ],
          answerImg: [],
          answer: '',
          commentary:
            'レンズ核線条体動脈は脳血管中心枝で穿通枝ともよばれる。動脈硬化の影響をもっとも受けやすい脳動脈。',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '神経堤から発生するのは次のどれか？',
          choices: [
            'メラノサイト',
            '脊髄',
            'ランゲルハンス細胞',
            'ケラチノサイト',
            '副腎皮質',
          ],
          answerImg: [],
          answer: '',
          commentary:
            '外胚葉から神経管が形成されるときの堤の部分の細胞群。メラノサイトのほか、神経節、副腎髄質など多彩な細胞へ分化する',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: '髄膜の中で最も頭蓋骨側に位置するのはどれか？',
          choices: ['硬膜', 'くも膜', '軟膜', '強膜', '莢膜'],
          answerImg: [],
          answer: '',
          commentary:
            '最外側（頭蓋骨側）を硬膜が覆い、その中（内外2枚の間）を硬膜静脈洞が流れる。その内側をくも膜、さらにくも膜下腔が構成し、最内側（脳側）を軟膜が覆う',
        },
        {
          detailInfo: '5/18',
          questionImg: [],
          questionSentence: 'ウィリス動脈輪を構成しない血管はどれか？',
          choices: ['脳底動脈', '前大脳動脈', '後交通動脈', '中大脳動脈'],
          answerImg: [],
          answer: '',
          commentary:
            'ウィリス動脈輪は下垂体と視交叉を取り囲む輪状の動脈群で、前交通動脈・前大脳動脈・後交通動脈・内頚動脈（中大脳動脈）・後大脳動脈で構成される。',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '痛覚の伝導に関与するのはどれか？',
          choices: [
            '脊髄神経節',
            '上顎神経節',
            '毛様体神経節',
            '心臓神経節',
            '膀胱神経節',
          ],
          answerImg: [],
          answer: '',
          commentary: '体性求心性一次ニューロンは脊髄神経節に細胞体をもつ。',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '温度覚を伝える伝導路で正しいのは次のどれか？',
          choices: [
            '脊髄神経節-脊髄後角-反対側前索-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄前角-同側前索-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄後角-同側後索-楔状束核-内側毛帯-視床VPL核-大脳皮質感覚野',
            '脊髄神経節-脊髄後角-反対側後索-楔状束核-小脳皮質',
            '脊髄神経節-脊髄前角-同側後索-楔状束核-内側毛帯-扁桃体',
          ],
          answerImg: [],
          answer: '',
          commentary: '温痛覚は外側脊髄視床路を通って大脳皮質（体性感覚野）に至る。末梢神経が脊髄に入った段階で中継し、すぐに交叉する。',
        },
        {
          detailInfo: '5/20',
          questionImg: [],
          questionSentence: '識別性触覚を伝える伝導路はどれか？',
          choices: ['後索-内側毛帯路','外側脊髄視床路', '前脊髄視床路', '脊髄小脳路', '皮質脊髄路'],
          answerImg: [],
          answer: '',
          commentary: '繊細な触圧核と深部感覚は延髄下部楔状束核で中継し延髄下部で交叉する後索-内側毛帯路を通り、大脳皮質（体性感覚野）に至る。',
        },
        // {
        //   detailInfo: '5/11',
        //   questionImg: [],
        //   questionSentence: '',
        //   choices: ['', '', '', ''],
        //   answerImg: [],
        //   answer: '',
        //   commentary: '',
        // },
      ],
    },
    {
      groupTag: '2018本',
      groupContents: [
        {
          detailInfo: '(1)',
          questionImg: [],
          questionSentence: 'Aortaについて誤っているものを選べ。',
          choices: [
            '重層扁平上皮である',
            '遠心性である',
            '内膜に弾性繊維が多く含まれる',
            '弾性型動脈である',
          ],
          answerImg: [],
          answer: '重層扁平上皮である',
          commentary:
            'Aorta（大動脈）は最も太い動脈で、全身に血液を送り出す（遠心性）本幹である。弾性動脈(elastic artery)とも呼ばれ、弾性繊維が平滑筋の量をしのぎ、板状の弾性繊維が何層も重なり、その間に平滑筋が入っている。血管の壁は毛細血管capillaryを除き3層構造で、内皮は単層の扁平な内皮細胞からなる。',
        },
      ],
    },
    {
      groupTag: '2020本',
      groupContents: [
        {
          detailInfo: '大問1(1)',
          questionImg: [],
          questionSentence: '洞様毛細血管について、その構造を説明しなさい。',
          answerImg: [ans2],
          answer:
            '洞様毛細血管は一般の毛細血管よりはるかに太く、血管壁には大小の窓が空いている。',
          commentary:
            '（肝臓：）小葉内には肝細胞索の間を洞様毛細血管（類洞）が流れ、小葉中心の中心静脈へ向かう。小さい窓は100nm以下、大きい窓は径1～3μm程度。内皮細胞のところどころではクッパー細胞という、異物を貪食して処理する細胞がある。内皮と無数の微絨毛をもつ肝細胞との間をディッセ腔という。ここには伊藤の脂肪摂取細胞があり、ビタミンAを取り込み、膠原繊維を作っている。',
        },
        {
          detailInfo: '大問1(2)',
          questionImg: [],
          questionSentence:
            '洞様毛細血管を持つ臓器を一つ選び、その臓器の組織構造を図示して説明しなさい。(図中には洞様毛細血管を含むこと)',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(1)',
          questionImg: [],
          questionSentence:
            '肺胞を構成する2種類の細胞について、その名称と細胞の特徴を答えなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問2(2)',
          questionImg: [],
          questionSentence: '血液空気関門について、図示して説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(1)',
          questionImg: [],
          questionSentence:
            '小腸の粘膜上皮を構成する細胞を全て挙げ、それぞれについて説明しなさい。',
          answerImg: [],
          answer: '',
          commentary: '',
        },
        {
          detailInfo: '大問3(2)',
          questionImg: [imageSample1],
          questionSentence:
            'これは小腸粘膜上皮を構成する細胞の電子顕微鏡写真である。細胞面を答え、この写真を説明しなさい。',
          answerImg: [imageSample2],
          answer:
            '小腸粘膜上皮では...........................................................................................................................',
          commentary: 'くわしい解説',
        },
      ],
    },
  ])
  const showQuestionList = () => {
    return questionList
  }
  return {
    showQuestionList,
  }
}
