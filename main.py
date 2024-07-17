import asyncio
import logging
import sqlite3
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton
from aiogram import Bot, Dispatcher, types
from aiogram.types.web_app_info import WebAppInfo
from aiogram.filters import CommandStart, Command
from decouple import config

token = config('TOKEN', cast=str)

bot = Bot(token=token)
dp = Dispatcher()

db = sqlite3.connect('data.db')
cursore = db.cursor()

import sqlite3

conn = sqlite3.connect('example.db')
cursore = conn.cursor()

cursore.execute('''CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)''')

# Correctly providing the arguments for the placeholders
cursore.execute("INSERT INTO users (id, name, age) VALUES (?, ?, ?)", (1, 'Alice', 30))

conn.commit()
conn.close()

@dp.message(CommandStart())
async def handle_start(message: types.Message):
    tgchannel = InlineKeyboardButton(text="Play❤️‍🔥", web_app=WebAppInfo(url='https://ismoil222.github.io'))
    row = [tgchannel]
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