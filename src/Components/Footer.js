import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="home__footer">
        <h4>TECHNOBLAZE 22.0</h4>
        <p>
          Technoblaze 22.0 is organised by the Society for the Advancement of
          Civil Engineering.
        </p>

        <div className="footer__contact">
          <a
            href="https://www.facebook.com/groups/439421137953522/?ref=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTg2LDEwLjMyYy00MS43NTYyMywwIC03NS42OCwzMy45MjM3NyAtNzUuNjgsNzUuNjhjMCwzNy45MDU4MiAyNy45NTg3MSw2OS4yNzU5NCA2NC4zNzIzNSw3NC43NDYxbDMuOTUwNjIsMC41OTc5N3YtNTkuNjM1NjNoLTE3Ljg3ODZ2LTEyLjEwNzE5aDE3Ljg3ODZ2LTE2LjA3Nzk3YzAsLTkuOTAwNiAyLjM3NTgyLC0xNi40MjEyOSA2LjMwODksLTIwLjUxMjM1YzMuOTMzMDksLTQuMDkxMDUgOS43NDQ0NiwtNi4xNTQzNyAxNy44MzE1NiwtNi4xNTQzN2M2LjQ2NjU0LDAgOC45ODIyNCwwLjM5MTgxIDExLjM3NDg1LDAuNjg1MzF2OS45MTAxNmgtOC40MTg2Yy00Ljc3NjczLDAgLTguNjk1NzQsMi42NjUwNyAtMTAuNzI5ODQsNi4yMTQ4NGMtMi4wMzQxLDMuNTQ5NzggLTIuNjY3MzUsNy43ODgxNyAtMi42NjczNSwxMi4xMDcxOXYxMy44MjA0N2gyMS4wNjMyOGwtMS44NzQ1MywxMi4xMDcxOWgtMTkuMTg4NzV2NTkuNzM2NDFsMy45MDM2LC0wLjUzMDc4YzM2LjkzMTIzLC01LjAwODczIDY1LjQzMzksLTM2LjYzMSA2NS40MzM5LC03NC45MDczNWMwLC00MS43NTYyMyAtMzMuOTIzNzcsLTc1LjY4IC03NS42OCwtNzUuNjh6TTg2LDE3LjJjMzguMDM4MDEsMCA2OC44LDMwLjc2MTk5IDY4LjgsNjguOGMwLDMzLjQ3MDQ4IC0yMy45NTY4NSw2MC45OTczOCAtNTUuNTc3NSw2Ny4xOTQyMnYtNDQuNjEyNWgxOC4yMDc4MWwzLjk5NzY1LC0yNS44NjcxOWgtMjIuMjA1NDd2LTYuOTQwNDdjMCwtMy41Njg5MSAwLjY1Mjk5LC02Ljc2NjY2IDEuNzUzNiwtOC42ODczNWMxLjEwMDYsLTEuOTIwNjkgMi4xNjE1MiwtMi43NTQ2OSA0Ljc2MzU5LC0yLjc1NDY5aDE1LjI5ODZ2LTIzLjAxODQ0bC0yLjk4MzEzLC0wLjQwMzEzYy0yLjA2MzI4LC0wLjI3OTE5IC02Ljc3MzkyLC0wLjkzMzkgLTE1LjI3MTcyLC0wLjkzMzljLTkuMjk4NjYsMCAtMTcuMjgwMjksMi41MzMwNiAtMjIuNzksOC4yNjQwNmMtNS41MDk3MSw1LjczMSAtOC4yMzA0NywxNC4yNjQ2MSAtOC4yMzA0NywyNS4yODI2NXY5LjE5Nzk3aC0xNy44Nzg2djI1Ljg2NzE5aDE3Ljg3ODZ2NDQuMzkwNzhjLTMxLjExMjUxLC02LjU5MDY2IC01NC41NjI5NywtMzMuODcxMTIgLTU0LjU2Mjk3LC02Ni45NzkyMmMwLC0zOC4wMzgwMSAzMC43NjE5OSwtNjguOCA2OC44LC02OC44eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
            />
          </a>
          <a
            href="https://www.instagram.com/techno_blaze_22_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADn0lEQVRoge2azW/URhjGnxeFU1EJ3CjZXkogwAWVJAdEkEqy4gb0AHdO/AdI3IMAqRLiQwiCBPeeSiq1FauNKBWXSki98JFyZOFEEppSghDk14PHxGt21+sZ726Q8pOsWdvzPvM+Hns99lhaY42OYHkqAzskHZVUlrRVUknSFwXl8p+kZ5JqkiqSbpvZbEHaEcAwUKX73Af2FWFgPXAFWO6BiZhl4DLQ52tiEzDTQwNpqsCmZvk2vEaA9ZJ+k3TQ6yh0jj8kTZjZu/SOdU0CLmj1mZCkMUk/NNrxSY8Aw5L+bLRvlYCkETN7kNzYqEfOa/WakKLczqU31hkhuk/08pT6RdG9qSTp1xb1JoDB5IZ0jxwtOLG8nDSzmpnVJJ3MqFuXa9rIRKFpdZZyciVt5OsCGpiXdFPRERuStMEtQ5K+l3RL0kKT2CmgBJQkTWW00zxXYDHghvUGmAS+zHIKbATOuBhfFls14EsN2JvQKQM3gCfAa7c8BqaAiUS9YRfrRdFGasCAi98O/N5GzF3cvw4wgKeZIo28wfUEcACYzxE7B4y52BFgKW/jRRqZTPREHhMxc8A2p3Eub3BRRuaAjS6undOpGTNOo5+cByOZe7NBYzv8ZGb/AGVJBwJ0vgPGzeyVpNu+IiFGpl15PEAjJtaYblmrBSFGHrtyLEAjJu7RR74CIUZeuHJrgEbMgCuf+wqEGCmSZVd65xNi5CtXeh/FBLHGFl+BECO7XHkvQCMm1tjtKxBi5LArfwzQiIk1Dres1S45b2TJG+LdnLFJqk6jH1jIE5jMPaRHNks65X6fkPTSQ2NeK0+CpyX1B+SzgsfRXCJ66yJgjKiX2uUlsN/FjtLjQSPUD+O30d7bySrwjYspAc99Gi7aCERmRhI648B14BHwr1seAteAg4l6o74msoyEPOouAWeBzPOc6MI+D7wNaK/uUddSDcxK2p6VSAYLikax04rGYzW3fUDSTklH3BJ6Yc+a2VC8kjZS0efzSuiOmR2KV9J/v5UuJxPCneRKukcGJf3d1XT82WFmH3Ot6xEzeyqp2vWU8lNJmpAaTyvskfRAq2eIn2ZZ0mjmtIKZ/SXparey8uBK2oTUfOqtT9HU23ins8rJPUnltqfezOy9pGOSZjqcWB6qko40MpEJ0AdcorfT0x+Ai/hOT6cM7QZ+7oGJCvBtOznm/YRjUCufcJQUDTs25D4yjXmt6BOOZ1r5hONpQdprrOHL/yJ+9ForfbfCAAAAAElFTkSuQmCC"
            />
          </a>
          <a
            href="mailto:technoblaze22.0@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA8UlEQVRIie3TIUtEQRTF8fsWBUEUbQqCYNxgtQsmUYufwWo0mAXB5kfYapT9ACarUTCIwWhY0KLizzIDE96uu7L6yjtlZu498z8z4Ua0alpV3sBUwVVVRUR0itrVFPn92ip28ej3esbhMPhyWudxgY8JwJ+4xGJiLNQFvOAIVTpv4nYM+B22Cs4enuoCsm7QTbVOCh3UgN9wgpnk3UA/N0cFwDvOMZd6q+gV/Wusp94sjvFaAn4KyHrATuHZx0Fx3sZ93cVxA8oXrxXelfSjr2EXsneSQRtExGlEiIiziFgaZc6D9q+T/CdqA5oPaNW8vgFL5t9bzs6iVgAAAABJRU5ErkJggg=="
            />
          </a>
        </div>
        <p className="credits">
          © <span>P</span>ROFI <span>E</span>PITO
        </p>
      </div>
    </div>
  );
}

export default Footer;
