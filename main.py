import asyncio
import logging
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram import Bot, Dispatcher, types
from aiogram.types.web_app_info import WebAppInfo
from aiogram.filters import CommandStart, Command

token = '7306901055:AAG9dV2QILtPtz62oyIEU73IGKY9CFTp1nI'

bot = Bot(token=token)
dp = Dispatcher()

@dp.message(CommandStart())
async def handle_start(message: types.Message):
    tgchanel = InlineKeyboardButton(text="Play❤️‍🔥", web_app=WebAppInfo(url='https://codepen.io/jkantner/pen/vYwoPOd'))
    row = [tgchanel]
    rows = [row]
    markup = InlineKeyboardMarkup(inline_keyboard=rows)
    await message.answer(text=f"Hello {message.from_user.full_name},"
                              f" play tap to earn to play Mycoin✔ ", reply_markup=markup,)


@dp.message(Command("help"))
async def handle_help(message: types.Message):
    await message.answer(text="Play✔\n")

async def main():
    logging.basicConfig(level=logging.INFO)
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())